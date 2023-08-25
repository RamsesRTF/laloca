class calcdps {
    constructor(a, b, c) {
        this.status = a;
        this.damage = b;
        this.duration = c;
    }
    doDPS(object) {
        switch (object.STATUS.name) {
            case "POISON":
                while (object.STATUS.duration >= 0) {
                    object.Params.stats.Life -= object.STATUS.value
                }
                break;
            case "REGENERATION":
                while (object.STATUS.duration >= 0) {
                    object.Params.stats.Life += object.STATUS.value
                }
                break;
            default:
                break;
        }
    }
}