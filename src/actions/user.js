import { UsersModel } from '../repositories/models/user';
export default class UserAction {
  static findAll(req, res) {
    UsersModel.find()
      .then(data => {
        let result = {};
        if (data) {
          result = data;
        }
        return res.status(200).json({
          status: 200,
          message: 'Ok',
          data: result
        });
      })
      .catch(error => {
        return res.status(500).json({
          status: 500,
          message: 'Error',
          data: error.message
        });
      });
  }
}
