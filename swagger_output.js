module.exports = {
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "REST API",
    "description": ""
  },
  "host": "back2dolist.herokuapp.com",
  "basePath": "/",
  "schemes": [
    "https"
  ],
  "paths": {
    "/user/": {
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "name": {
                  "example": "any"
                },
                "email": {
                  "example": "any"
                },
                "password": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Created"
          },
          "400": {
            "description": "Bad Request"
          }
        }
      },
      "get": {
        "description": "",
        "parameters": [
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      },
      "put": {
        "description": "",
        "parameters": [
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "name": {
                  "example": "any"
                },
                "image": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      },
      "delete": {
        "description": "",
        "parameters": [
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/user/task": {
      "get": {
        "description": "",
        "parameters": [
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/user/{id}": {
      "get": {
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/task/": {
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "description": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Created"
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      },
      "get": {
        "description": "",
        "parameters": [
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/task/user": {
      "get": {
        "description": "",
        "parameters": [
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/task/{id}": {
      "put": {
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not Found"
          }
        }
      },
      "delete": {
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/login/": {
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "email": {
                  "example": "any"
                },
                "password": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          }
        }
      }
    },
    "/load/": {
      "get": {
        "description": "",
        "parameters": [
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    }
  }
}