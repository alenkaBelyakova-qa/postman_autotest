{
	"info": {
		"_postman_id": "fc36f50c-b549-46b8-85e2-a542a7547046",
		"name": "AgentApp",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "22423661"
	},
	"item": [
		{
			"name": "АУТЕНТИФИКАЦИЯ",
			"request": {
				"auth": {
					"type": "basic",
					"basic": [
						{
							"key": "password",
							"value": "111",
							"type": "string"
						},
						{
							"key": "username",
							"value": "qa@qa.qa",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"username\": \"qa@qa.qa\",\n  \"password\": \"111\"\n}"
				},
				"url": {
					"raw": "{{http_schema}}://{{host}}/{{api_v1}}/users/obtain-token",
					"protocol": "{{http_schema}}",
					"host": [
						"{{host}}"
					],
					"path": [
						"{{api_v1}}",
						"users",
						"obtain-token"
					]
				}
			},
			"response": []
		},
		{
			"name": "Создание автомобиля",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Authorization",
						"value": "Token a3f1f7e29076fc6ecc4f3b49c7ee8e71c605a37c",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{ \n  \"car_model_id\": 261020578, \n  \"engine_power\": 110, \n  \"vin_number\": \"SJNFCAE11U1230880\", \n  \"number_plate\": \"P617EC70\", \n  \"manufacturing_year\": 2007, \n  \"max_mass\": null, \n  \"has_trailer\": false, \n  \"credential\": [ \n    { \n      \"credential_type\": \"VEHICLE_REGISTRATION\", \n      \"issue_date\": \"2010-11-01\", \n      \"number\": \"204326\", \n      \"series\": \"70PM\" \n    } \n  ] \n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{http_schema}}://{{host}}/{{api_v1}}/insured_objects/cars",
					"protocol": "{{http_schema}}",
					"host": [
						"{{host}}"
					],
					"path": [
						"{{api_v1}}",
						"insured_objects",
						"cars"
					]
				}
			},
			"response": []
		},
		{
			"name": "Страхователь",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					},
					{
						"key": "Accept",
						"value": "application/json, text/plain, */*"
					},
					{
						"key": "Authorization",
						"value": "Token a3f1f7e29076fc6ecc4f3b49c7ee8e71c605a37c"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"last_name\": \"Тарасов\",\n\t\"first_name\": \"Дмитрий\",\n\t\"patronymic\": \"Сергеевич\",\n\t\"birth_date\": \"1987-01-13\",\n\t\"credential\": [{\n\t  \t\"credential_type\": \"RUSSIAN_INTERNAL_PASSPORT\",\n\t\t\"issue_date\": \"2017-03-08\",\n\t\t\"issue_point\": \"УФМС\",\n\t\t\"issue_point_code\": \"123-456\",\n\t\t\"number\": \"123123\",\n\t\t\"series\": \"1111\"\n\t}],\n\t\"address\": [{\n\t\t\"address_query\": \"г Санкт-Петербург, г Ломоносов, ул Швейцарская, д 8 к 2\",\n\t\t\"address_type\": \"LEGAL_ADDRESS\"\n\t},\n\t{\n\t\t\"address_query\": \"г Санкт-Петербург, г Ломоносов, ул Швейцарская, д 8 к 1\",\n\t\t\"address_type\": \"ACTUAL_ADDRESS\"\n\t}]\n}"
				},
				"url": {
					"raw": "{{http_schema}}://{{host}}/{{api_v1}}/insured_objects/insurants/natural_persons",
					"protocol": "{{http_schema}}",
					"host": [
						"{{host}}"
					],
					"path": [
						"{{api_v1}}",
						"insured_objects",
						"insurants",
						"natural_persons"
					]
				}
			},
			"response": []
		},
		{
			"name": "Получение общих настроек приложения",
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Authorization",
						"value": "Token a3f1f7e29076fc6ecc4f3b49c7ee8e71c605a37c"
					},
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"url": {
					"raw": "{{http_schema}}://{{host}}/{{api_v1}}/general_preferences/",
					"protocol": "{{http_schema}}",
					"host": [
						"{{host}}"
					],
					"path": [
						"{{api_v1}}",
						"general_preferences",
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "Текущий пользователь",
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Authorization",
						"value": "Token a3f1f7e29076fc6ecc4f3b49c7ee8e71c605a37c",
						"type": "text"
					},
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "{{http_schema}}://{{host}}/{{api_v1}}/users/current_user",
					"protocol": "{{http_schema}}",
					"host": [
						"{{host}}"
					],
					"path": [
						"{{api_v1}}",
						"users",
						"current_user"
					]
				}
			},
			"response": []
		},
		{
			"name": "Водитель",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					},
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					},
					{
						"key": "Authorization",
						"value": "Token a3f1f7e29076fc6ecc4f3b49c7ee8e71c605a37c",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n   \"first_name\": \"Дмитрий\",\n   \"last_name\": \"Тарасов\",\n   \"patronymic\": \"Сергеевич\",\n   \"birth_date\": \"1987-01-13\",\n   \"gender\":\"M\",\n   \"driving_experience_started\": \"2006-08-08\",\n   \"driver_licenses\": [{\n   \t\t\"credential_type\": \"DRIVER_LICENSE\",\n\t\t\"number\": \"013837\",\n\t\t\"series\": \"47СТ\",\n\t\t\"issue_date\": \"2006-08-08\"\n\t}]\n}"
				},
				"url": {
					"raw": "{{http_schema}}://{{host}}/{{api_v1}}/insured_objects/drivers",
					"protocol": "{{http_schema}}",
					"host": [
						"{{host}}"
					],
					"path": [
						"{{api_v1}}",
						"insured_objects",
						"drivers"
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
			"key": "http_schema",
			"value": "https",
			"type": "string"
		},
		{
			"key": "host",
			"value": "partner.agentapp.ru",
			"type": "string"
		},
		{
			"key": "api_v1",
			"value": "v1",
			"type": "string"
		},
		{
			"key": "token",
			"value": "token"
		}
	]
}