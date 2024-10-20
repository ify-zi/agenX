import House from "../models/houseModel.js";

export default class HouseClass {

  //return a list of all houses to be displayed
  static async getHouses(req, res) {
    try {
      const houses = await House.find();
      return res.status(200).json({houses});
    } catch (err) {
      return res.status(500).json({error: `${err}`})
    }
  }

  //method a specific houses
  static async getHouse (req, res) {
    try{
      const houseId = (req.params.id) ? req.params.id : 0;
      const house = await House.findById(houseId);
      return res.status(200).json({house})
    } catch (err) {
      res.status(500).json({error: `${err}`})
    }
  }

  //create a house object
  static async createHouse (req, res) {
    try {
      const {
        location,
        amenities,
        dimension,
        price,
      } = req.body;
      const newHouse = new House({
        location,
        owner: req.user.id,
        dimension,
        amenities,
        price,
        dateListed: Date.now
      });
      await newHouse.save();
      return res.status(200).json({newHouse});
    } catch(err) {
      return res.status(500).json({error: `${err}`})
    }
  }

  // edit a house object from the house owner
  static async editHouse (req, res) {
    try{
      const { body } = req;
      const location = (body.location) ? body.location : 'none';
      const owner = (body.owner) ? body.owner : req.user.id;
      const price = (body.price) ? body.price : 0;
      const amenities = (body.amenities) ? body.amenities : [];
      const dimension = (body.dimension) ? body.dimension : {};
      const dateListed = (body.dateListed) ? body.dateListed : Date.now;
      const id = req.params.id;

      const editHouse = await House.findOne({_id: id});
      const savedHouse = await editHouse.updateOne({
        location,
        owner,
        price,
        amenities,
        dimension,
        dateListed
      });
      return res.status(202).json({savedHouse})
    } catch (err) {
      return res.status(500).json({error: `${err}`});
    }
  }
}