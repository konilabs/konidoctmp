+++
title = "Contact"
linktitle = "Contact"

date = 2021-03-01T00:00:00Z

aliases = []

keywords = ["contact", "email", "mail", "information"]
description = "Formulaire de contact du site"

menu = "main"
weight = 3

outputs = ["php"]
+++

{{< php >}}
$email = "";
$message = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST')
{
	$errors = array();

	if (empty($_POST['email']))
	{
		array_push($errors, "L'adresse email est vide");
	}
  else
  {
    $email = $_POST['email'];
  }

	if (empty($_POST['message']))
	{
		array_push($errors, "Le texte du message est vide");
	}
  else
  {
    $message = $_POST['message'];
  }

	if (empty($_POST['h-captcha-response']))
	{
		array_push($errors, "Vous devez résoudre le captcha");
	}
	else 
	{
		// Verify Captcha
		$data = array(
			'secret' => "0x0",
			'response' => $_POST['h-captcha-response']
		);
		$verify = curl_init();
		curl_setopt($verify, CURLOPT_URL, "https://hcaptcha.com/siteverify");
		curl_setopt($verify, CURLOPT_POST, true);
		curl_setopt($verify, CURLOPT_POSTFIELDS, http_build_query($data));
		curl_setopt($verify, CURLOPT_RETURNTRANSFER, true);
		$verifyResponse = curl_exec($verify);
		// echo 'Response';
		// var_dump($verifyResponse);
		$responseData = json_decode($verifyResponse);
		// echo 'Decoded response';
		// var_dump($responseData);
		// print_r($responseData);

		if(!($responseData->success))
		{
			array_push($errors, "Mauvaise réponse au captcha, êtes vous un robot ?");
		} 
		else
		{
			//contact form submission code
			$to = 'fakemail@gmail.fr';
			$subject = 'Formulaire de contact Konilabs';
			$htmlContent = "
				<p><b>Email: </b>".$email."</p>
				<p><b>Message: </b>".$message."</p>
			";
			// Always set content-type when sending HTML email
			$headers = "MIME-Version: 1.0" . "\r\n";
			$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
			// More headers
			$headers .= 'From:Konilabs <'.$email.'>' . "\r\n";
			//send email
			$return = mail($to,$subject,$htmlContent,$headers);
			
			if(!$return)
			{
				array_push($errors, "Erreur lors de l'envoi de l'email");	
			}
      else
      {
        $email = "";
        $message = "";
      }
		}
	}

	if(sizeof($errors) > 0)
	{
		echo('<div class="alert alert-danger" role="alert">');
		echo("Le message n'a pas été envoyé à cause des erreurs suivantes :");
		echo('<ul>');
		foreach($errors as $error)
		{
			echo '<li>'.$error.'</li>';
		}
		echo('</ul>');
		echo('</div>');
	}
	else
	{
		echo('<div class="alert alert-success" role="alert">');
		echo('Message envoyé !');
		echo('</div>');
	}
}
{{< /php >}}

Si vous avez besoin de plus d'informations ou si vous avez une question, vous pouvez m'envoyer un message. J'y répondrai avec plaisir.

<form method="post">
  <div class="form-group">
    <label for="InputEmail">Adresse email</label>
    <input type="email" class="form-control" name="email" id="InputEmail" aria-describedby="emailHelp" value="{{< php >}}echo $email;{{< /php >}}" required>
    <small id="emailHelp" class="form-text text-muted">Votre adresse email pour que je puisse vous répondre.</small>
  </div>
  <div class="form-group">
    <label for="MessageText">Message</label>
    <textarea class="form-control" id="MessageText" name="message" rows="5" required>{{< php >}}echo $message;{{< /php >}}</textarea>
  </div>
  <div class="form-group">
    <div class="h-captcha" data-sitekey="51d0bf26-a8fc-495b-bd21-3d4b675f8f14"></div>
  </div>
  <button type="submit" class="btn btn-primary">Envoyer</button>
</form>

<script src="https://hcaptcha.com/1/api.js" async defer></script>