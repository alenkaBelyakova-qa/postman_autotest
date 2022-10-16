{
	"info": {
		"_postman_id": "0ce6f4e5-2e4c-4b4e-afca-659ec556e10a",
		"name": "HeadHunter",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "22423661"
	},
	"item": [
		{
			"name": "Информация по ключевым навыкам",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://api.hh.ru/suggests/skill_set?text=Тестирование пользовательского интерфейса",
					"protocol": "https",
					"host": [
						"api",
						"hh",
						"ru"
					],
					"path": [
						"suggests",
						"skill_set"
					],
					"query": [
						{
							"key": "text",
							"value": "Тестирование пользовательского интерфейса"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Все станции метро в городе «Нижний Новгород»",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://api.hh.ru/metro/66?area=1679",
					"protocol": "https",
					"host": [
						"api",
						"hh",
						"ru"
					],
					"path": [
						"metro",
						"66"
					],
					"query": [
						{
							"key": "area",
							"value": "1679"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Информациия по университету",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://api.hh.ru/educational_institutions?id=39108&text=Московский финансово-юридический университет",
					"protocol": "https",
					"host": [
						"api",
						"hh",
						"ru"
					],
					"path": [
						"educational_institutions"
					],
					"query": [
						{
							"key": "id",
							"value": "39108"
						},
						{
							"key": "text",
							"value": "Московский финансово-юридический университет"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Доступные языки на HeadHunter",
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Cookie",
						"value": "PHPSESSID=r2t5uvjq435r4q7ib3vtdjq120",
						"type": "text"
					}
				],
				"url": {
					"raw": "https://api.hh.ru/languages",
					"protocol": "https",
					"host": [
						"api",
						"hh",
						"ru"
					],
					"path": [
						"languages"
					]
				}
			},
			"response": []
		}
	]
}