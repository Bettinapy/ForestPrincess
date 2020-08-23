import MovingObject from './movements/moving_objects';
import { loadEnemyWalk } from './sprite-load';
import EnemyWalk from './movements/enemy_walk';

export function createEnemyWalk() {
    return Promise.all([
        loadEnemyWalk(),
    ]
    ).then(([enemyWalk]) => {
        const enemy = new MovingObject();
        enemy.size.setVector(55, 55)

        enemy.walk = new EnemyWalk();

        const eWalks = ['walk-1', 'walk-2', 'walk-3']

        enemy.draw = function drawEnemy(context) {
            
            let enemyWalkIdx = (Math.floor(enemy.walk.distance / 10)) % eWalks.length; 
          
            enemyWalk.draw(eWalks[enemyWalkIdx], context, 0, 0, 3, 3, enemy.walk.enemyDir < 0);                        
        }
        return enemy;
    })
}