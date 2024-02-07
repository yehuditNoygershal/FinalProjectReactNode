const User = require('../models/users')

exports.addUser = async(req,res)=>{
    console.log(req.body);
    const {name} = req.body;
    const task = await User.create(req.body);
    res.json(task)
    
}

exports.deleteUser = async (req, res) => {
    const  idUser  = req.params.idUser;
  console.log(idUser);
    try {
      const deletedUser = await User.findOneAndDelete({ idUser: idUser });
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Failed to delete user:', error);
      res.status(500).json({ message: 'Failed to delete user' });
    }
  };
  

  exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error('Failed to get users:', error);
      res.status(500).json({ message: 'Failed to get users' });
    }
  };
  
  exports.updateUser = async (req, res) => {
    const { idUser } = req.params;
    const { name, email } = req.body;
  
    try {
      const updatedUser = await User.findOneAndUpdate(
        { idUser: idUser }, // עדכון לפי שדה userId
        { name, email },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(updatedUser);
    } catch (error) {
      console.error('Failed to update user:', error);
      res.status(500).json({ message: 'Failed to update user' });
    }
  };
  
// exports.getUserById = async (req, res) => {
//     const { ID } = req.params;
  
//     try {
//       const user = await User.findOne({ ID });
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }
//       res.json(user);
//     } catch (error) {
//       console.error('Failed to get user:', error);
//       res.status(500).json({ message: 'Failed to get user' });
//     }
//   };

  exports.getUserByName = async (req, res) => {
    const { name } = req.params;
  
    try {
      const user = await User.findOne({ name });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error('Failed to get user:', error);
      res.status(500).json({ message: 'Failed to get user' });
    }
  };
  