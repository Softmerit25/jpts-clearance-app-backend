export const ApprovedMailTemplate = (user, certificateNo)=>{
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
<img src="https://res.cloudinary.com/softmerit/image/upload/v1726824823/jpts/logo.png" alt="jpts-logo" width="80" height="80" style="text-align: center;">

<h3 style="font-size: 16px; font-family: Trirong, serif;">
JPTS Institute of Science, Management &amp; Technology.
</h3>
</div>

<p style="font-size: 14px; font-family: Trirong, serif;">
${formatDate}
</p>

<h1 style="font-size: 16px; font-family: Trirong, serif; text-align:center">
CLEARANCE CERTIFICATE
</h1>

<h2 style="font-size: 14px; font-family: Trirong, serif;">
To whom it may concern:
</h2>


<p style="font-size: 14px; font-family: Trirong, serif;">
This is to certify that <strong>${user?.surname} ${user?.othernames}</strong> with Matric No: <strong>${user?.matricno}</strong> 
is a student of aforementioned Institute, <strong>${user?.study_centre} Centre</strong> has been cleared for all academic requirements for which he/she 
is responsible as to this date with his/her completion of Course of Study <strong>${user?.course_of_study}</strong> with Certificate Clearance Number: <strong>${certificateNo}</strong>.
</p>

<p style="font-size: 14px; font-family: Trirong, serif;">
This is issued for whatever purpose it may serve.
</p>

<p style="font-size: 14px; font-family: Trirong, serif;">
Given this day <strong>${formatDate}</strong>
</p>


<div style="text-align: center; margin-top: 50px">
<span>Registrar</span><br/>
<span>JPTS Institue of Science,<br/> Management &amp; Technology.</span>
</div>


</div>
</body>
</html>


    `
}