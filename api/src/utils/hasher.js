import { genSaltSync, compareSync, hashSync} from "bcrypt";

export const hashPwd = (password) => {
  genSaltSync(saltRound, (err, salt) => {
    return hashSync(password, salt)
  });
}

export const checkPwd = (password, hashedPwd) => {
    return compareSync(password, hashedPwd);
};