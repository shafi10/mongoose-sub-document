const Data = require('../models/Data')

exports.getData = (req,res,next)=>{
    res.render('home')
}

exports.postData = async (req,res,next)=>{
    let {options, website, facebook, twitter} = req.body
    options= options.map(opt=>{
        console.log(opt)
        return {
            name:opt
        }
    })

    const data = new Data({
        options,
        links:{
            website:website,
            facebook:facebook,
            twitter:twitter
        }
    })

    try {
         await data.save()
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}

exports.findData = (req,res,next)=>{
    Data.find().then( result=>{
        res.render('view',{
          result
        })
        console.log('data found')
    })
    .catch(err=>{
        console.log(err)
    })
}