export const RejectMailTemplate = (user, reason) => {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    const formatDate = date && date?.toLocaleDateString('en-US', options);

    return `
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Trirong">
	<meta name="viewport" content="width=device-width, initial-scale==1.0" />
</head>
<body>

<div style="padding:30px 50px">
<div style="text-align:center;">
<img src="https://res.cloudinary.com/softmerit/image/upload/v1726824823/jpts/logo.png" alt="jpts-logo" width="80" height="80" style="text-align: center;" >
</div>

<p style="font-size: 14px; font-family: Trirong, serif;">${formatDate}</p>

<h1 style="font-size: 18px; font-family: Trirong, serif;">Hi ${user?.surname},</h1>

<h2 style="font-size: 14px; font-family: Trirong, serif;">Matric No: ${user?.matricno}</h2>

<p style="font-size: 14px; font-family: Trirong, serif;">
 This is to inform you that your clearance application is reject. Please, see reasons for rejection below:
</p>

<p style="font-size: 14px; font-family: Trirong, serif;">
    ${reason}
</p>

<p style="font-size: 14px; font-family: Trirong, serif;">
Also, log into the clearance app to meet up with reasons for rejection by updating your clearance information.
</p>

<span>Registrar</span><br/>
<span>JPTS Institue of Science, Management &amp; Technology.</span>

</div>
</body>
</html>
    `
}