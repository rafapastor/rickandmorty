<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
class HealthController
{
    public function check(): Response
    {
        return new Response(
            "I'm alive: ".random_int(0, 100)
        );
    }
}
