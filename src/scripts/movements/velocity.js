class Velocity{
    update(character, timestep) {
        character.pos.x += character.vel.x * timestep;
        character.pos.y += character.vel.y * timestep * 1.8;
    }
}

export default Velocity;