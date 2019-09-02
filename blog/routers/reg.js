const user = require("../model/use")
module.exports = function (reg, res) {
    user.findOne({ username: reg.body.username })
        .then(data => {
            if (data) {
                user.findOne({ password: reg.body.password })
                .then((pData)=>{
                    if (pData) {
                        res.send({code: 1,msg: "登录成功" })
                    }else{
                        res.send({code: 1,msg: "账号已经存在" })
                    }
                })
                
            } else {
                user.create(reg.body)
                    .then(() => {res.send({ code: 1, msg: "创建账号成功"})})
                    .catch((e)=> {res.send({ code: 0, msg: "服务器异常，请重试"});console.log(e) })
            }
        })
        .catch((e)=> {res.send({ code: 0, msg: "服务器异常，请重试"});console.log(e)})
}
