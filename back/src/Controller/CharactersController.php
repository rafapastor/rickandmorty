<?php

namespace App\Controller;

use App\Service\CharactersRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

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

    /**
     * @Route("/rick-and-morty/characters/filter", methods={"GET"})
     */
    public function getFilteredCharacters(Request $request): JsonResponse
    {
        $filters = $request->query->all();
        $characters = $this->charactersRepository->getFilteredCharacters($filters);

        return new JsonResponse($characters);
    }
}
