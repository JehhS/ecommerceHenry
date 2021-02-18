const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/facusiri', (req, res) =>  {
    const data = req.body

    const smtpTransport = nodemailer.createTransport({
        service:'Gmail',
        host: 'smtp.gmail.com',
        port: 465,
        auth:{
            user:'magios.ecommerce@gmail.com',
            pass:'soyhenry123'
        }
    });

    const mailOptions = {
        from: data.email,
        to: 'sirifacu97@gmail.com',
        subject: `Henry E-commerce contact from: ${data.name}`,
        html: ` <h3> Information </h3>
                    <ul> 
                    <li> Name: ${data.name} </li>
                    <li> Lastname: ${data.lastname} </li>
                    <li> Email: ${data.email} </li>
                    </ul>

                    <h3>Message</h3>
                    <p>${data.message}</p>
        `
    };

    smtpTransport.sendMail(mailOptions, (error, res) => {
        if(error) {
            res.send(error)
        }
        else{
            res.send('Success')
        }
    })

    smtpTransport.close();
})

router.post('/ajaime', (req, res) =>  {
    const data = req.body

    const smtpTransport = nodemailer.createTransport({
        service:'Gmail',
        host: 'smtp.gmail.com',
        secure: true,
        port: 465,
        auth:{
            user:'magios.ecommerce@gmail.com',
            pass:'soyhenry123'
        }
    });

    const mailOptions = {
        from: data.email,
        to: 'agustindiegojaime@gmail.com',
        subject: `Henry E-commerce contact from: ${data.name}`,
        html: ` <h3> Information </h3>
                    <ul> 
                    <li> Name: ${data.name} </li>
                    <li> Lastname: ${data.lastname} </li>
                    <li> Email: ${data.email} </li>
                    </ul>

                    <h3>Message</h3>
                    <p>${data.message}</p>
        `
    };

    smtpTransport.sendMail(mailOptions, (error, res) => {
        if(error) {
            console.log(error)
        }
        else{
            res.send('Success')
        }
    })

    smtpTransport.close();
})


router.post('/jsantochi', (req, res) =>  {
    const data = req.body

    const smtpTransport = nodemailer.createTransport({
        service:'Gmail',
        host: 'smtp.gmail.com',
        port: 465,
        auth:{
            user:'magios.ecommerce@gmail.com',
            pass:'soyhenry123'
        }
    });

    const mailOptions = {
        from: data.email,
        to: 'jeremiassantochi@gmail.com',
        subject: `Henry E-commerce contact from: ${data.name}`,
        html: ` <h3> Information </h3>
                    <ul> 
                    <li> Name: ${data.name} </li>
                    <li> Lastname: ${data.lastname} </li>
                    <li> Email: ${data.email} </li>
                    </ul>

                    <h3>Message</h3>
                    <p>${data.message}</p>
        `
    };

    smtpTransport.sendMail(mailOptions, (error, res) => {
        if(error) {
            res.send(error)
        }
        else{
            res.send('Success')
        }
    })

    smtpTransport.close();
})


router.post('/nzaba', (req, res) =>  {
    const data = req.body

    const smtpTransport = nodemailer.createTransport({
        service:'Gmail',
        host: 'smtp.gmail.com',
        port: 465,
        auth:{
            user:'magios.ecommerce@gmail.com',
            pass:'soyhenry123'
        }
    });

    const mailOptions = {
        from: data.email,
        to: 'nzabattaro@gmail.com',
        subject: `Henry E-commerce contact from: ${data.name}`,
        html: ` <h3> Information </h3>
                    <ul> 
                    <li> Name: ${data.name} </li>
                    <li> Lastname: ${data.lastname} </li>
                    <li> Email: ${data.email} </li>
                    </ul>

                    <h3>Message</h3>
                    <p>${data.message}</p>
        `
    };

    smtpTransport.sendMail(mailOptions, (error, res) => {
        if(error) {
            res.send(error)
        }
        else{
            res.send('Success')
        }
    })

    smtpTransport.close();
})


router.post('/fmarilao', (req, res) =>  {
    const data = req.body

    const smtpTransport = nodemailer.createTransport({
        service:'Gmail',
        host: 'smtp.gmail.com',
        port: 465,
        auth:{
            user:'magios.ecommerce@gmail.com',
            pass:'soyhenry123'
        }
    });

    const mailOptions = {
        from: data.email,
        to: 'facundomarilao@gmail.com',
        subject: `Henry E-commerce contact from: ${data.name}`,
        html: ` <h3> Information </h3>
                    <ul> 
                    <li> Name: ${data.name} </li>
                    <li> Lastname: ${data.lastname} </li>
                    <li> Email: ${data.email} </li>
                    </ul>

                    <h3>Message</h3>
                    <p>${data.message}</p>
        `
    };

    smtpTransport.sendMail(mailOptions, (error, res) => {
        if(error) {
            res.send(error)
        }
        else{
            res.send('Success')
        }
    })

    smtpTransport.close();
})


router.post('/cramirez', (req, res) =>  {
    const data = req.body

    const smtpTransport = nodemailer.createTransport({
        service:'Gmail',
        host: 'smtp.gmail.com',
        port: 465,
        auth:{
            user:'magios.ecommerce@gmail.com',
            pass:'soyhenry123'
        }
    });

    const mailOptions = {
        from: data.email,
        to: 'cramirezl1984@gmail.com',
        subject: `Henry E-commerce contact from: ${data.name}`,
        html: ` <h3> Information </h3>
                    <ul> 
                    <li> Name: ${data.name} </li>
                    <li> Lastname: ${data.lastname} </li>
                    <li> Email: ${data.email} </li>
                    </ul>

                    <h3>Message</h3>
                    <p>${data.message}</p>
        `
    };

    smtpTransport.sendMail(mailOptions, (error, res) => {
        if(error) {
            res.send(error)
        }
        else{
            res.send('Success')
        }
    })

    smtpTransport.close();
})

module.exports = router;