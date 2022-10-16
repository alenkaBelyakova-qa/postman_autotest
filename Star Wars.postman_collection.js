{
	"info": {
		"_postman_id": "f1abc45b-8604-4251-8f9c-089ff94479ad",
		"name": "Star Wars",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "22423661"
	},
	"item": [
		{
			"name": "Запрос по персонажу",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Alenka\", function () {",
							"    pm.response.to.have.status(200);",
							"});",
							"",
							"pm.test(\"Body matches string\", function () {",
							"    pm.expect(pm.response.text()).to.include(\"Obi-Wan Kenobi\");",
							"});",
							"",
							"pm.test(\"Response time is less than 200ms\", function () {",
							"    pm.expect(pm.response.responseTime).to.be.below(200);",
							"});",
							"",
							"pm.test(\"Successful POST request\", function () {",
							"    pm.expect(pm.response.code).to.be.oneOf([200]);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{host}}/api/people/10/",
					"host": [
						"{{host}}"
					],
					"path": [
						"api",
						"people",
						"10",
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "Запрос за планетой",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Alenka\", function () {",
							"    pm.response.to.have.status(200);",
							"});",
							"",
							"pm.test(\"Body matches string\", function () {",
							"    pm.expect(pm.response.text()).to.include(\"Endor\");",
							"});",
							"",
							"pm.test(\"Response time is less than 300ms\", function () {",
							"    pm.expect(pm.response.responseTime).to.be.below(300);",
							"});",
							"",
							"pm.test(\"Successful POST request\", function () {",
							"    pm.expect(pm.response.code).to.be.oneOf([200]);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{host}}/api/planets/7/",
					"host": [
						"{{host}}"
					],
					"path": [
						"api",
						"planets",
						"7",
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "Запрос за космическим кораблём",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"German\", function () {",
							"    pm.response.to.have.status(200);",
							"});",
							"",
							"pm.test(\"Body matches string\", function () {",
							"    pm.expect(pm.response.text()).to.include(\"landing craft\");",
							"});",
							"",
							"pm.test(\"Response time is less than 200ms\", function () {",
							"    pm.expect(pm.response.responseTime).to.be.below(200);",
							"});",
							"",
							"pm.test(\"Successful POST request\", function () {",
							"    pm.expect(pm.response.code).to.be.oneOf([200]);",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{host}}/api/starships/5/",
					"host": [
						"{{host}}"
					],
					"path": [
						"api",
						"starships",
						"5",
						""
					]
				}
			},
			"response": []
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "host",
			"value": "https://swapi.dev",
			"type": "string"
		}
	]
}