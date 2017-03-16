console.log()
var perspective = require('./gl-mat4/perspective');
var multiply = require('./gl-mat4/multiply')
var lookAt = require('./gl-mat4/lookAt')
var invert = require('./gl-mat4/invert')
var rotate = require('./gl-mat4/rotate')
var transform = require('./gl-vec3/transformMat4')
var foxJSON = {
    "positions": [
        [
            111.0246,
            52.6046,
            46.2259
        ],
        [
            114.025,
            87.6733,
            58.9818
        ],
        [
            66.192,
            80.898,
            55.3943
        ],
        [
            72.1133,
            35.4918,
            30.8714
        ],
        [
            97.8045,
            116.561,
            73.9788
        ],
        [
            16.7623,
            58.0109,
            58.0782
        ],
        [
            52.6089,
            30.3641,
            42.5561
        ],
        [
            106.8814,
            31.9455,
            46.9133
        ],
        [
            113.4846,
            38.6049,
            49.1215
        ],
        [
            108.6633,
            43.2332,
            46.3154
        ],
        [
            101.2166,
            15.9822,
            46.3082
        ],
        [
            16.6605,
            -16.2883,
            93.6187
        ],
        [
            40.775,
            -10.2288,
            85.2764
        ],
        [
            23.9269,
            -2.5103,
            86.7365
        ],
        [
            11.1691,
            -7.0037,
            99.3776
        ],
        [
            9.5692,
            -34.3939,
            141.672
        ],
        [
            12.596,
            7.1655,
            88.741
        ],
        [
            61.1809,
            8.8142,
            76.9968
        ],
        [
            39.7195,
            -28.9271,
            88.9638
        ],
        [
            13.7962,
            -68.5757,
            132.057
        ],
        [
            15.2674,
            -62.32,
            129.688
        ],
        [
            14.8446,
            -52.6096,
            140.113
        ],
        [
            12.8917,
            -49.7716,
            144.741
        ],
        [
            35.6042,
            -71.758,
            81.0639
        ],
        [
            47.4625,
            -68.6061,
            63.3697
        ],
        [
            38.2486,
            -64.7302,
            38.9099
        ],
        [
            -12.8917,
            -49.7716,
            144.741
        ],
        [
            -13.7962,
            -68.5757,
            132.057
        ],
        [
            17.8021,
            -71.758,
            81.0639
        ],
        [
            19.1243,
            -69.0168,
            49.4201
        ],
        [
            38.2486,
            -66.2756,
            17.7762
        ],
        [
            12.8928,
            -36.7035,
            141.672
        ],
        [
            109.284,
            -93.5899,
            27.8243
        ],
        [
            122.118,
            -36.8894,
            35.025
        ],
        [
            67.7668,
            -30.197,
            78.4178
        ],
        [
            33.1807,
            101.852,
            25.3186
        ],
        [
            9.4063,
            -35.5898,
            150.722
        ],
        [
            -9.5692,
            -34.3939,
            141.672
        ],
        [
            -9.4063,
            -35.5898,
            150.722
        ],
        [
            11.4565,
            -37.8994,
            150.722
        ],
        [
            -12.596,
            7.1655,
            88.741
        ],
        [
            -11.1691,
            -7.0037,
            99.3776
        ],
        [
            70.2365,
            62.8362,
            -3.9475
        ],
        [
            47.2634,
            54.294,
            -27.4148
        ],
        [
            28.7302,
            91.7311,
            -24.9726
        ],
        [
            69.1676,
            6.5862,
            -12.7757
        ],
        [
            28.7302,
            49.1003,
            -48.3596
        ],
        [
            31.903,
            5.692,
            -47.822
        ],
        [
            35.0758,
            -34.4329,
            -16.2809
        ],
        [
            115.2841,
            48.6815,
            48.6841
        ],
        [
            110.8428,
            28.4821,
            49.1762
        ],
        [
            -19.1243,
            -69.0168,
            49.4201
        ],
        [
            -38.2486,
            -66.2756,
            17.7762
        ],
        [
            -111.0246,
            52.6046,
            46.2259
        ],
        [
            -72.1133,
            35.4918,
            30.8714
        ],
        [
            -66.192,
            80.898,
            55.3943
        ],
        [
            -114.025,
            87.6733,
            58.9818
        ],
        [
            -97.8045,
            116.561,
            73.9788
        ],
        [
            -52.6089,
            30.3641,
            42.5561
        ],
        [
            -16.7623,
            58.0109,
            58.0782
        ],
        [
            -106.8814,
            31.9455,
            46.9133
        ],
        [
            -108.6633,
            43.2332,
            46.3154
        ],
        [
            -113.4846,
            38.6049,
            49.1215
        ],
        [
            -101.2166,
            15.9822,
            46.3082
        ],
        [
            -16.6605,
            -16.2883,
            93.6187
        ],
        [
            -23.9269,
            -2.5103,
            86.7365
        ],
        [
            -40.775,
            -10.2288,
            85.2764
        ],
        [
            -61.1809,
            8.8142,
            76.9968
        ],
        [
            -39.7195,
            -28.9271,
            88.9638
        ],
        [
            -14.8446,
            -52.6096,
            140.113
        ],
        [
            -15.2674,
            -62.32,
            129.688
        ],
        [
            -47.4625,
            -68.6061,
            63.3697
        ],
        [
            -35.6042,
            -71.758,
            81.0639
        ],
        [
            -38.2486,
            -64.7302,
            38.9099
        ],
        [
            -17.8021,
            -71.758,
            81.0639
        ],
        [
            -12.8928,
            -36.7035,
            141.672
        ],
        [
            -67.7668,
            -30.197,
            78.4178
        ],
        [
            -122.118,
            -36.8894,
            35.025
        ],
        [
            -109.284,
            -93.5899,
            27.8243
        ],
        [
            -33.1807,
            101.852,
            25.3186
        ],
        [
            -11.4565,
            -37.8994,
            150.722
        ],
        [
            -70.2365,
            62.8362,
            -3.9475
        ],
        [
            -28.7302,
            91.7311,
            -24.9726
        ],
        [
            -47.2634,
            54.294,
            -27.4148
        ],
        [
            -69.1676,
            6.5862,
            -12.7757
        ],
        [
            -28.7302,
            49.1003,
            -48.3596
        ],
        [
            -31.903,
            5.692,
            -47.822
        ],
        [
            -35.0758,
            -34.4329,
            -16.2809
        ],
        [
            -115.2841,
            48.6815,
            48.6841
        ],
        [
            -110.8428,
            28.4821,
            49.1762
        ]
    ],
    "chunks": [
        {
            "color": [
                246,
                133,
                27
            ],
            "faces": [
                [
                    17,
                    33,
                    10
                ],
                [
                    17,
                    18,
                    34
                ],
                [
                    34,
                    33,
                    17
                ],
                [
                    10,
                    6,
                    17
                ],
                [
                    11,
                    15,
                    31
                ],
                [
                    31,
                    18,
                    11
                ],
                [
                    18,
                    12,
                    11
                ],
                [
                    14,
                    16,
                    40
                ],
                [
                    40,
                    41,
                    14
                ],
                [
                    59,
                    5,
                    35
                ],
                [
                    35,
                    79,
                    59
                ],
                [
                    67,
                    63,
                    77
                ],
                [
                    67,
                    77,
                    76
                ],
                [
                    76,
                    68,
                    67
                ],
                [
                    63,
                    67,
                    58
                ],
                [
                    64,
                    68,
                    75
                ],
                [
                    75,
                    37,
                    64
                ],
                [
                    68,
                    64,
                    66
                ],
                [
                    14,
                    41,
                    37
                ],
                [
                    37,
                    15,
                    14
                ],
                [
                    5,
                    59,
                    40
                ],
                [
                    40,
                    16,
                    5
                ]
            ]
        },
        {
            "color": [
                228,
                118,
                27
            ],
            "faces": [
                [
                    31,
                    24,
                    18
                ],
                [
                    6,
                    5,
                    16
                ],
                [
                    16,
                    17,
                    6
                ],
                [
                    24,
                    32,
                    33
                ],
                [
                    33,
                    34,
                    24
                ],
                [
                    5,
                    4,
                    35
                ],
                [
                    75,
                    68,
                    71
                ],
                [
                    58,
                    67,
                    40
                ],
                [
                    40,
                    59,
                    58
                ],
                [
                    71,
                    76,
                    77
                ],
                [
                    77,
                    78,
                    71
                ]
            ]
        },
        {
            "color": [
                118,
                61,
                22
            ],
            "faces": [
                [
                    0,
                    1,
                    2
                ],
                [
                    2,
                    3,
                    0
                ],
                [
                    4,
                    5,
                    2
                ],
                [
                    6,
                    3,
                    2
                ],
                [
                    2,
                    5,
                    6
                ],
                [
                    7,
                    8,
                    9
                ],
                [
                    10,
                    3,
                    6
                ],
                [
                    10,
                    50,
                    7
                ],
                [
                    7,
                    3,
                    10
                ],
                [
                    7,
                    9,
                    3
                ],
                [
                    49,
                    0,
                    9
                ],
                [
                    3,
                    9,
                    0
                ],
                [
                    53,
                    54,
                    55
                ],
                [
                    55,
                    56,
                    53
                ],
                [
                    57,
                    56,
                    55
                ],
                [
                    58,
                    59,
                    55
                ],
                [
                    55,
                    54,
                    58
                ],
                [
                    60,
                    61,
                    62
                ],
                [
                    63,
                    58,
                    54
                ],
                [
                    63,
                    60,
                    89
                ],
                [
                    60,
                    63,
                    54
                ],
                [
                    60,
                    54,
                    61
                ],
                [
                    88,
                    61,
                    53
                ],
                [
                    54,
                    53,
                    61
                ],
                [
                    2,
                    1,
                    4
                ],
                [
                    55,
                    59,
                    57
                ]
            ]
        },
        {
            "color": [
                22,
                22,
                22
            ],
            "faces": [
                [
                    36,
                    15,
                    37
                ],
                [
                    37,
                    38,
                    36
                ],
                [
                    31,
                    39,
                    22
                ],
                [
                    22,
                    21,
                    31
                ],
                [
                    31,
                    15,
                    36
                ],
                [
                    36,
                    39,
                    31
                ],
                [
                    75,
                    69,
                    26
                ],
                [
                    26,
                    80,
                    75
                ],
                [
                    75,
                    80,
                    38
                ],
                [
                    38,
                    37,
                    75
                ],
                [
                    38,
                    80,
                    39
                ],
                [
                    39,
                    36,
                    38
                ],
                [
                    39,
                    80,
                    26
                ],
                [
                    26,
                    22,
                    39
                ]
            ]
        },
        {
            "color": [
                215,
                193,
                179
            ],
            "faces": [
                [
                    21,
                    20,
                    24
                ],
                [
                    24,
                    31,
                    21
                ],
                [
                    69,
                    71,
                    70
                ],
                [
                    71,
                    69,
                    75
                ]
            ]
        },
        {
            "color": [
                192,
                173,
                158
            ],
            "faces": [
                [
                    19,
                    20,
                    21
                ],
                [
                    21,
                    22,
                    19
                ],
                [
                    20,
                    19,
                    23
                ],
                [
                    23,
                    24,
                    20
                ],
                [
                    23,
                    25,
                    24
                ],
                [
                    19,
                    22,
                    26
                ],
                [
                    26,
                    27,
                    19
                ],
                [
                    23,
                    28,
                    29
                ],
                [
                    23,
                    29,
                    30
                ],
                [
                    25,
                    23,
                    30
                ],
                [
                    29,
                    51,
                    52
                ],
                [
                    52,
                    30,
                    29
                ],
                [
                    27,
                    26,
                    69
                ],
                [
                    69,
                    70,
                    27
                ],
                [
                    70,
                    71,
                    72
                ],
                [
                    72,
                    27,
                    70
                ],
                [
                    72,
                    71,
                    73
                ],
                [
                    51,
                    74,
                    72
                ],
                [
                    52,
                    51,
                    72
                ],
                [
                    73,
                    52,
                    72
                ],
                [
                    19,
                    27,
                    74
                ],
                [
                    74,
                    28,
                    19
                ],
                [
                    51,
                    29,
                    28
                ],
                [
                    28,
                    74,
                    51
                ],
                [
                    74,
                    27,
                    72
                ],
                [
                    28,
                    23,
                    19
                ]
            ]
        },
        {
            "color": [
                205,
                97,
                22
            ],
            "faces": [
                [
                    24,
                    34,
                    18
                ],
                [
                    16,
                    13,
                    12
                ],
                [
                    12,
                    17,
                    16
                ],
                [
                    13,
                    16,
                    11
                ],
                [
                    71,
                    68,
                    76
                ],
                [
                    40,
                    67,
                    66
                ],
                [
                    66,
                    65,
                    40
                ],
                [
                    65,
                    64,
                    40
                ]
            ]
        },
        {
            "color": [
                35,
                52,
                71
            ],
            "faces": [
                [
                    11,
                    12,
                    13
                ],
                [
                    64,
                    65,
                    66
                ]
            ]
        },
        {
            "color": [
                228,
                117,
                31
            ],
            "faces": [
                [
                    14,
                    15,
                    11
                ],
                [
                    11,
                    16,
                    14
                ],
                [
                    17,
                    12,
                    18
                ],
                [
                    41,
                    64,
                    37
                ],
                [
                    67,
                    68,
                    66
                ]
            ]
        },
        {
            "color": [
                226,
                118,
                27
            ],
            "faces": [
                [
                    35,
                    4,
                    42
                ],
                [
                    4,
                    1,
                    42
                ],
                [
                    42,
                    43,
                    44
                ],
                [
                    44,
                    35,
                    42
                ],
                [
                    45,
                    43,
                    42
                ],
                [
                    42,
                    10,
                    45
                ],
                [
                    30,
                    32,
                    24
                ],
                [
                    24,
                    25,
                    30
                ],
                [
                    30,
                    33,
                    32
                ],
                [
                    33,
                    30,
                    10
                ],
                [
                    44,
                    43,
                    46
                ],
                [
                    43,
                    45,
                    47
                ],
                [
                    47,
                    46,
                    43
                ],
                [
                    48,
                    47,
                    45
                ],
                [
                    45,
                    30,
                    48
                ],
                [
                    30,
                    45,
                    10
                ],
                [
                    49,
                    42,
                    0
                ],
                [
                    8,
                    7,
                    42
                ],
                [
                    50,
                    42,
                    7
                ],
                [
                    50,
                    10,
                    42
                ],
                [
                    1,
                    0,
                    42
                ],
                [
                    42,
                    9,
                    8
                ],
                [
                    42,
                    49,
                    9
                ],
                [
                    64,
                    41,
                    40
                ],
                [
                    57,
                    59,
                    79
                ],
                [
                    79,
                    81,
                    57
                ],
                [
                    57,
                    81,
                    56
                ],
                [
                    82,
                    79,
                    35
                ],
                [
                    35,
                    44,
                    82
                ],
                [
                    81,
                    79,
                    82
                ],
                [
                    82,
                    83,
                    81
                ],
                [
                    84,
                    63,
                    81
                ],
                [
                    81,
                    83,
                    84
                ],
                [
                    44,
                    46,
                    85
                ],
                [
                    85,
                    82,
                    44
                ],
                [
                    52,
                    73,
                    71
                ],
                [
                    71,
                    78,
                    52
                ],
                [
                    52,
                    78,
                    77
                ],
                [
                    77,
                    63,
                    52
                ],
                [
                    82,
                    85,
                    83
                ],
                [
                    83,
                    85,
                    86
                ],
                [
                    86,
                    84,
                    83
                ],
                [
                    87,
                    52,
                    84
                ],
                [
                    84,
                    86,
                    87
                ],
                [
                    52,
                    63,
                    84
                ],
                [
                    88,
                    53,
                    81
                ],
                [
                    62,
                    81,
                    60
                ],
                [
                    89,
                    60,
                    81
                ],
                [
                    89,
                    81,
                    63
                ],
                [
                    56,
                    81,
                    53
                ],
                [
                    81,
                    62,
                    61
                ],
                [
                    81,
                    61,
                    88
                ],
                [
                    48,
                    87,
                    86
                ],
                [
                    86,
                    47,
                    48
                ],
                [
                    47,
                    86,
                    85
                ],
                [
                    85,
                    46,
                    47
                ],
                [
                    48,
                    30,
                    52
                ],
                [
                    52,
                    87,
                    48
                ]
            ]
        }
    ]
};


var SVG_NS = 'http://www.w3.org/2000/svg'

function createNode (type) {
  return document.createElementNS(SVG_NS, type)
}

function setAttribute (node, attribute, value) {
  node.setAttributeNS(null, attribute, value)
}

module.exports = function createLogo (options_) {
  var options = options_ || {}

  var followCursor = !!options.followMouse
  var slowDrift = !!options.slowDrift
  var shouldRender = true

  var DISTANCE = 400
  var lookCurrent = [0, 0]
  var lookRate = 0.3

  var width = options.width || 400
  var height = options.height || 400
  var container = createNode('svg')

  if (!options.pxNotRatio) {
    width = (window.innerWidth * (options.width || 0.25)) | 0
    height = ((window.innerHeight * options.height) || width) | 0
    if ('minWidth' in options && width < options.minWidth) {
      width = options.minWidth
      height = (options.minWidth * options.height / options.width) | 0
    }
  }

  setAttribute(container, 'width', width + 'px')
  setAttribute(container, 'height', height + 'px')

  var mouse = {
    x: 0,
    y: 0
  }
  window.addEventListener('mousemove', function (ev) {
    if (followCursor) {
      var target = {
        x: ev.clientX,
        y: ev.clientY,
      }
      setLookAt(target)
    }
  })

  function setLookAt(target) {
    var bounds = container.getBoundingClientRect()
    mouse.x = 1.0 - 2.0 * (target.x - bounds.left) / bounds.width
    mouse.y = 1.0 - 2.0 * (target.y - bounds.top) / bounds.height
  }

  document.getElementById('fox').appendChild(container)

  var NUM_VERTS = foxJSON.positions.length

  var positions = new Float32Array(3 * NUM_VERTS)
  var transformed = new Float32Array(3 * NUM_VERTS)

  ;(function () {
    var pp = foxJSON.positions
    var ptr = 0
    for (var i = 0; i < pp.length; ++i) {
      var p = pp[i]
      for (var j = 0; j < 3; ++j) {
        positions[ptr++] = p[j]
      }
    }
  })()

  function Polygon (svg, indices) {
    this.svg = svg
    this.indices = indices
    this.zIndex = 0
  }

  var polygons = (function () {
    var polygons = []
    for (var i = 0; i < foxJSON.chunks.length; ++i) {
      var chunk = foxJSON.chunks[i]
      var color = 'rgb(' + chunk.color + ')'
      var faces = chunk.faces
      for (var j = 0; j < faces.length; ++j) {
        var f = faces[j]
        var polygon = createNode('polygon')
        setAttribute(
          polygon,
          'fill',
          color)
        setAttribute(
          polygon,
          'stroke',
          color)
        setAttribute(
          polygon,
          'points',
          '0,0, 10,0, 0,10')
        container.appendChild(polygon)
        polygons.push(new Polygon(polygon, f))
      }
    }
    return polygons
  })()

  var computeMatrix = (function () {
    var objectCenter = new Float32Array(3)
    var up = new Float32Array([0, 1, 0])
    var projection = new Float32Array(16)
    var model = new Float32Array(16)
    var view = lookAt(
      new Float32Array(16),
      new Float32Array([0, 0, DISTANCE]),
      objectCenter,
      up)
    var invView = invert(new Float32Array(16), view)
    var invProjection = new Float32Array(16)
    var target = new Float32Array(3)
    var transformed = new Float32Array(16)

    var X = new Float32Array([1, 0, 0])
    var Y = new Float32Array([0, 1, 0])
    var Z = new Float32Array([0, 0, 1])

    return function () {
      var rect = container.getBoundingClientRect()
      var viewportWidth = rect.width
      var viewportHeight = rect.height
      perspective(
        projection,
        Math.PI / 4.0,
        viewportWidth / viewportHeight,
        100.0,
        1000.0)
      invert(invProjection, projection)
      target[0] = lookCurrent[0]
      target[1] = lookCurrent[1]
      target[2] = 1.2
      transform(target, target, invProjection)
      transform(target, target, invView)
      lookAt(
        model,
        objectCenter,
        target,
        up)
      if (slowDrift) {
        var time = (Date.now() / 1000.0)
        rotate(model, model, 0.1 + (Math.sin(time / 3) * 0.2), X)
        rotate(model, model, -0.1 + (Math.sin(time / 2) * 0.03), Z)
        rotate(model, model, 0.5 + (Math.sin(time / 3) * 0.2), Y)
      }

      multiply(transformed, projection, view)
      multiply(transformed, transformed, model)

      return transformed
    }
  })()

  function updatePositions (M) {
    var m00 = M[0]
    var m01 = M[1]
    var m02 = M[2]
    var m03 = M[3]
    var m10 = M[4]
    var m11 = M[5]
    var m12 = M[6]
    var m13 = M[7]
    var m20 = M[8]
    var m21 = M[9]
    var m22 = M[10]
    var m23 = M[11]
    var m30 = M[12]
    var m31 = M[13]
    var m32 = M[14]
    var m33 = M[15]

    for (var i = 0; i < NUM_VERTS; ++i) {
      var x = positions[3 * i]
      var y = positions[3 * i + 1]
      var z = positions[3 * i + 2]

      var tw = x * m03 + y * m13 + z * m23 + m33
      transformed[3 * i] =
        (x * m00 + y * m10 + z * m20 + m30) / tw
      transformed[3 * i + 1] =
        (x * m01 + y * m11 + z * m21 + m31) / tw
      transformed[3 * i + 2] =
        (x * m02 + y * m12 + z * m22 + m32) / tw
    }
  }

  function compareZ (a, b) {
    return b.zIndex - a.zIndex
  }

  var toDraw = []
  function updateFaces () {
    var i
    var rect = container.getBoundingClientRect()
    var w = rect.width
    var h = rect.height
    toDraw.length = 0
    for (i = 0; i < polygons.length; ++i) {
      var poly = polygons[i]
      var indices = poly.indices

      var i0 = indices[0]
      var i1 = indices[1]
      var i2 = indices[2]
      var ax = transformed[3 * i0]
      var ay = transformed[3 * i0 + 1]
      var bx = transformed[3 * i1]
      var by = transformed[3 * i1 + 1]
      var cx = transformed[3 * i2]
      var cy = transformed[3 * i2 + 1]
      var det = (bx - ax) * (cy - ay) - (by - ay) * (cx - ax)
      if (det < 0) {
        continue
      }

      var points = []
      var zmax = -Infinity
      var zmin = Infinity
      var element = poly.svg
      for (var j = 0; j < 3; ++j) {
        var idx = indices[j]
        points.push(
          0.5 * w * (1.0 - transformed[3 * idx]) + ',' +
          0.5 * h * (1.0 - transformed[3 * idx + 1]))
        var z = transformed[3 * idx + 2]
        zmax = Math.max(zmax, z)
        zmin = Math.min(zmin, z)
      }
      poly.zIndex = zmax + 0.25 * zmin
      var joinedPoints = points.join(' ')

      if (joinedPoints.indexOf('NaN') === -1) {
        setAttribute(element, 'points', joinedPoints)
      }

      toDraw.push(poly)
    }
    toDraw.sort(compareZ)
    container.innerHTML = ''
    for (i = 0; i < toDraw.length; ++i) {
      container.appendChild(toDraw[i].svg)
    }
  }

  function renderScene () {
    if (!shouldRender) return
    window.requestAnimationFrame(renderScene)

    var li = (1.0 - lookRate)
    var bounds = container.getBoundingClientRect()

    lookCurrent[0] = li * lookCurrent[0] + lookRate * mouse.x
    lookCurrent[1] = li * lookCurrent[1] + lookRate * mouse.y + 0.085

    var matrix = computeMatrix()
    updatePositions(matrix)
    updateFaces()
  }

  renderScene()

  return {
    container: container,
    lookAt: setLookAt,
    setFollowMouse: setFollowMouse,
    stopAnimation: stopAnimation,
    startAnimation: startAnimation,
  }

  function stopAnimation() {
    shouldRender = false
  }

  function startAnimation() {
    shouldRender = true
  }

  function setFollowMouse (state) {
    followCursor = state
  }

}
