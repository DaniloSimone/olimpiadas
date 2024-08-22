
<?php
      use MercadoPago\Client\Payment\PaymentClient;
      use MercadoPago\MercadoPagoConfig;
    
      MercadoPagoConfig::setAccessToken("TEST-6378956382144774-082215-ab10cd16131e4431f0cdc320a6a7ef40-599739091");
    
      $client = new PaymentClient();
      $request_options = new MPRequestOptions();
      $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);
      try {
        $payment = $client->create([
            "token" => $_POST['token'],
            "issuer_id" => $_POST['issuer_id'],
            "payment_method_id" => $_POST['paymentMethodId'],
            "transaction_amount" => (float) $_POST['transactionAmount'],
            "installments" => $_POST['installments'],
            "payer" => [
                "email" => $_POST['email'],
                "identification" => [
                    "type" => $_POST['identificationType'],
                    "number" => $_POST['number']
                ]
            ]
        ], $request_options);
        
        echo json_encode($payment);
    } catch (Exception $e) {
        echo 'Error: ',  $e->getMessage(), "\n";
    }
    ?>  
    