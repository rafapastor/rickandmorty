<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\CharactersRepository;

class CharactersController
{
    private $charactersRepository;

    public function __construct(CharactersRepository $charactersRepository)
    {
        $this->charactersRepository = $charactersRepository;
    }

    /**
     * @Route("/rick-and-morty/characters", methods={"GET"})
     */
    public function getCharacters(): JsonResponse
    {
        $characters = $this->charactersRepository->getAllCharacters();
        return new JsonResponse($characters);
    }

    /**
     * @Route("/rick-and-morty/characters/count", methods={"GET"})
     */
    public function getCharactersCount(): JsonResponse
    {
        $allCharacters = $this->charactersRepository->getAllCharacters();
        return new JsonResponse(['count' => $allCharacters['info']['count']]);
    }

    /**
     * @Route("/rick-and-morty/characters/{ids}", methods={"GET"})
     */
    public function getCharactersByIds(string $ids): JsonResponse
    {
        $characters = $this->charactersRepository->getCharactersByIds($ids);
        return new JsonResponse($characters);
    }

}
