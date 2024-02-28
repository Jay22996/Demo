var registermodel = require("../model/Register");

exports.add_User = async (req, res) => {

    var data = await registermodel.create(req.body);
    res.status(200).json({
      status: "user registered",
      data,
    });
  }

exports.login = async (req, res) => {
    var find = await registermodel.find({ email: req.body.email });

      if (find.length == 1) {
     
    
            res.status(200).json({
              status: "user is logged in",
            });
        }
       else {
        res.status(200).json({
          status: "please register",
        });
    }
}
      
    
  
