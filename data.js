var APP_DATA = {
  "scenes": [
    {
      "id": "0-livingroom",
      "name": "livingroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 3.083870856496741,
          "pitch": 0.1508523450265571,
          "rotation": 0,
          "target": "1-bathroom"
        },
        {
          "yaw": -2.429027395048248,
          "pitch": 0.1646624371589951,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": -1.8400083604724902,
          "pitch": 0.20362301892196122,
          "rotation": 0,
          "target": "2-bedroom2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bathroom",
      "name": "bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0731569245948105,
          "pitch": 0.2579239734008887,
          "rotation": 0,
          "target": "0-livingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bedroom2",
      "name": "bedroom2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.331876926723986,
          "pitch": 0.28999300503776837,
          "rotation": 0,
          "target": "0-livingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9822265649343525,
          "pitch": 0.21957725681922646,
          "rotation": 0,
          "target": "0-livingroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
