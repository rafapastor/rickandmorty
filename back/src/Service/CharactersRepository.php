<?php

namespace App\Service;

class CharactersRepository
{
    private $apiUrl;

    public function __construct(string $apiUrl)
    {
        $this->apiUrl = $apiUrl;
    }

    public function getAllCharacters(): array
    {
        $characters = json_decode(file_get_contents($this->apiUrl . '/character'), true);
        return $characters;
    }

    public function getCharacter(int $id): array
    {
        $character = json_decode(file_get_contents($this->apiUrl . '/character/' . $id), true);
        return $character;
    }

    public function getCharactersByIds(string $ids): array
    {
        $characters = json_decode(file_get_contents($this->apiUrl . '/character/' . $ids), true);
        return $characters;
    }
}
