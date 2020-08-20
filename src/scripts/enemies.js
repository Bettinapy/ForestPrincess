import MovingObject from './movements/moving_objects';
import { loadEnemyIdle } from './sprite-load';

export function createEnemyIdle() {
    return Promise.all([
        loadEnemyIdle(),
    ]
    ).then(([enemyIdle]) => {
        const enemy = new MovingObject();
        enemy.size.setVector(60, 60)

        enemy.draw = function drawEnemy(context) {
            enemyIdle.draw("idle-1", context, this.pos.x, this.pos.y, 3, 3);                
        }
        return enemy;
    })
}