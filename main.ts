namespace SpriteKind {
    export const location = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`
}
function clyde_Chase () {
    clyde_possible_dir = []
    clyde_distance = []
    if (!(scene.isTileAWallAt(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Ahead, Clyde)))) {
        clyde_possible_dir.push(sprites.heading(Clyde))
        if (clydeMode == 0) {
            clydeDistance(sprites.heading(Clyde))
        } else {
            clyde_ScatterDistance(sprites.heading(Clyde))
        }
        clyde_distance.push(clyde_returnDistance)
    }
    if (!(scene.isTileAWallAt(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Right, Clyde)))) {
        clyde_possible_dir.push(Math.mod(sprites.heading(Clyde) + 90, 360))
        if (clydeMode == 0) {
            clydeDistance(Math.mod(sprites.heading(Clyde) + 90, 360))
        } else {
            clyde_ScatterDistance(Math.mod(sprites.heading(Clyde) + 90, 360))
        }
        clyde_distance.push(clyde_returnDistance)
    }
    if (!(scene.isTileAWallAt(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Left, Clyde)))) {
        clyde_possible_dir.push(Math.mod(sprites.heading(Clyde) - 90, 360))
        if (clydeMode == 0) {
            clydeDistance(Math.mod(sprites.heading(Clyde) - 90, 360))
        } else {
            clyde_ScatterDistance(Math.mod(sprites.heading(Clyde) - 90, 360))
        }
        clyde_distance.push(clyde_returnDistance)
    }
    smallestInArray()
    clyde_direction = clyde_possible_dir[smallest_index]
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    tiles.setTileAt(location, myTiles.tile0)
    info.changeScoreBy(30)
    scraed_ghost = 1
    info.startCountdown(10)
})
function clyde_CollisionDetection () {
    clyde_possible_dir = []
    if (!(scene.isTileAWallAt(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Ahead, Clyde)))) {
        clyde_possible_dir.push(sprites.heading(Clyde))
    }
    if (!(scene.isTileAWallAt(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Right, Clyde)))) {
        clyde_possible_dir.push(Math.mod(sprites.heading(Clyde) + 90, 360))
    }
    if (!(scene.isTileAWallAt(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Left, Clyde)))) {
        clyde_possible_dir.push(Math.mod(sprites.heading(Clyde) - 90, 360))
    }
    clyde_direction = arrays.choose(clyde_possible_dir)
}
function clyde_setVelocity () {
    if (clyde_direction == 0) {
        Clyde.setVelocity(0, -50)
    } else if (clyde_direction == 90) {
        Clyde.setVelocity(50, 0)
    } else if (clyde_direction == 180) {
        Clyde.setVelocity(0, 50)
    } else if (clyde_direction == 270) {
        Clyde.setVelocity(-50, 0)
    }
}
function clyde_ScatterDistance (num: number) {
    if (num == sprites.heading(Clyde)) {
        clyde_returnDistance = (clydeScatterCol - scene.getTileColCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Ahead, Clyde))) * (clydeScatterCol - scene.getTileColCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Ahead, Clyde))) + (clydeScatterRow - scene.getTileRowCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Ahead, Clyde))) * (clydeScatterRow - scene.getTileRowCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Ahead, Clyde)))
    } else if (num == Math.mod(sprites.heading(Clyde) + 90, 360)) {
        clyde_returnDistance = (clydeScatterCol - scene.getTileColCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Right, Clyde))) * (clydeScatterCol - scene.getTileColCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Right, Clyde))) + (clydeScatterRow - scene.getTileRowCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Right, Clyde))) * (clydeScatterRow - scene.getTileRowCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Right, Clyde)))
    } else {
        clyde_returnDistance = (clydeScatterCol - scene.getTileColCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Left, Clyde))) * (clydeScatterCol - scene.getTileColCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Left, Clyde))) + (clydeScatterRow - scene.getTileRowCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Left, Clyde))) * (clydeScatterRow - scene.getTileRowCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Left, Clyde)))
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeLifeBy(-1)
})
info.onCountdownEnd(function () {
    scraed_ghost = 0
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    tiles.setTileAt(location, myTiles.tile0)
    info.changeScoreBy(1)
    number_pellets += -1
    if (number_pellets == 0) {
        pause(500)
        game.over(true, effects.confetti)
    }
})
function clyde_ScatterMain () {
    if (scene.spriteContainedWithinTile(Clyde) && (scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Clyde)) != clydePrevRow || scene.getTileColCoordinate(scene.getTileLocationOfSprite(Clyde)) != clydePrevColumn)) {
        clyde_Chase()
        clydePrevRow = scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Clyde))
        clydePrevColumn = scene.getTileColCoordinate(scene.getTileLocationOfSprite(Clyde))
    }
    clyde_setVelocity()
}
function clydeDistance (num: number) {
    if (num == sprites.heading(Clyde)) {
        clyde_returnDistance = (scene.getTileColCoordinate(scene.getTileLocationOfSprite(Pacman)) - scene.getTileColCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Ahead, Clyde))) * (scene.getTileColCoordinate(scene.getTileLocationOfSprite(Pacman)) - scene.getTileColCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Ahead, Clyde))) + (scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Pacman)) - scene.getTileRowCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Ahead, Clyde))) * (scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Pacman)) - scene.getTileRowCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Ahead, Clyde)))
    } else if (num == Math.mod(sprites.heading(Clyde) + 90, 360)) {
        clyde_returnDistance = (scene.getTileColCoordinate(scene.getTileLocationOfSprite(Pacman)) - scene.getTileColCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Right, Clyde))) * (scene.getTileColCoordinate(scene.getTileLocationOfSprite(Pacman)) - scene.getTileColCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Right, Clyde))) + (scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Pacman)) - scene.getTileRowCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Right, Clyde))) * (scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Pacman)) - scene.getTileRowCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Right, Clyde)))
    } else {
        clyde_returnDistance = (scene.getTileColCoordinate(scene.getTileLocationOfSprite(Pacman)) - scene.getTileColCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Left, Clyde))) * (scene.getTileColCoordinate(scene.getTileLocationOfSprite(Pacman)) - scene.getTileColCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Left, Clyde))) + (scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Pacman)) - scene.getTileRowCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Left, Clyde))) * (scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Pacman)) - scene.getTileRowCoordinate(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Left, Clyde)))
    }
}
info.onLifeZero(function () {
    tiles.placeOnTile(Pacman, tiles.getTileLocation(1, 3))
    tiles.placeOnTile(Clyde, tiles.getTileLocation(5, 3))
    info.setLife(1)
})
function smallestInArray () {
    smallest_distance = clyde_distance[0]
    if (clyde_distance.length == 1) {
        smallest_index = 0
    } else {
        for (let index = 0; index <= clyde_distance.length - 1; index++) {
            if (clyde_distance[index] <= smallest_distance) {
                smallest_distance = clyde_distance[index]
                smallest_index = index
            }
        }
    }
}
let smallest_distance = 0
let smallest_index = 0
let clyde_direction = 0
let clyde_returnDistance = 0
let clyde_distance: number[] = []
let clyde_possible_dir: number[] = []
let scraed_ghost = 0
let clydeMode = 0
let clydeScatterRow = 0
let clydeScatterCol = 0
let clydePrevColumn = 0
let clydePrevRow = 0
let Clyde: Sprite = null
let number_pellets = 0
let Pacman: Sprite = null
let clyde_flag_1 = 0
tiles.setTilemap(tiles.createTilemap(
            hex`1000100001010101010101010101010101010101010302020202020202020202020203010102010101020101010102010101020101020101010201000001020101010201010202020202010000010202020202010101010101020104040102010101010102020202020202020202020202020202010101010102010101010201010101010101010101020101010102010101010101020202020201010101020202020201010201010102010101010201010102010102020202020202020202020202020101020101010201010101020101010201010201010102010101010201010102010103020202020202020202020202030101010101010101010101010101010101`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 . 2 2 2 2 . 2 2 2 . 2 
2 . 2 2 2 . 2 . . 2 . 2 2 2 . 2 
2 . . . . . 2 . . 2 . . . . . 2 
2 2 2 2 2 . 2 . . 2 . 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 
2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 
2 . . . . . 2 2 2 2 . . . . . 2 
2 . 2 2 2 . 2 2 2 2 . 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 . 2 2 2 2 . 2 2 2 . 2 
2 . 2 2 2 . 2 2 2 2 . 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4],
            TileScale.Sixteen
        ))
Pacman = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. 5 5 5 5 5 5 5 5 5 5 . . . . . 
. 5 5 5 5 5 5 5 5 5 . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. 5 5 5 5 5 5 5 5 5 . . . . . . 
. 5 5 5 5 5 5 5 5 5 5 . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . . . . 5 5 5 5 5 5 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
tiles.placeOnTile(Pacman, tiles.getTileLocation(1, 3))
number_pellets = tiles.getTilesByType(myTiles.tile2).length
Clyde = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 4 4 4 4 . . . . . . . 
. . . 4 4 4 4 4 4 4 4 . . . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . 4 4 1 1 4 4 4 4 1 1 4 . . . 
. 4 4 1 1 1 1 4 4 1 1 1 1 . . . 
. 4 4 8 8 1 1 4 4 8 8 1 1 . . . 
. 4 4 8 8 1 1 4 4 8 8 1 1 4 . . 
4 4 4 4 1 1 4 4 4 4 1 1 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
4 4 . 4 4 4 . . 4 4 4 . 4 4 . . 
4 . . . 4 . . . . 4 . . . 4 . . 
`, SpriteKind.Enemy)
tiles.placeOnTile(Clyde, tiles.getTileLocation(5, 3))
Clyde.setVelocity(0, -50)
clydePrevRow = scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Clyde))
clydePrevColumn = scene.getTileColCoordinate(scene.getTileLocationOfSprite(Clyde))
info.setScore(0)
clydeScatterCol = scene.getTileColCoordinate(tiles.getTileLocation(1, 1))
clydeScatterRow = scene.getTileRowCoordinate(tiles.getTileLocation(1, 1))
clydeMode = 0
info.setLife(1)
scraed_ghost = 0
game.onUpdate(function () {
    sprites.updateheading(Clyde)
    if (Math.mod(game.runtime() / 1000, 60) < 30) {
        clydeMode = 0
    } else {
        clydeMode = 1
    }
    clyde_ScatterMain()
})
game.onUpdate(function () {
    controller.moveSprite(Pacman, 50, 50)
    scene.cameraFollowSprite(Pacman)
    if (Pacman.x == 7 && controller.left.isPressed()) {
        Pacman.setPosition(249, Pacman.y)
    } else if (Pacman.x == 249 && controller.right.isPressed()) {
        Pacman.setPosition(7, Pacman.y)
    }
})
