class Model {
    bind(options = {}) {
        for (var k in options) {
            var v = options[k];
            if (typeof v === 'function') {
                continue;
            }

            if (v !== null && v !== undefined) {
                if (typeof this[k] === 'function') {
                    this[k] = this[k](v);
                } else {
                    this[k] = v;
                }
            }
            if (options.timestamps !== undefined) {
                this.timestamps = options.timestamps;
            }
            Object.getOwnPropertyNames(this).forEach((property) => {
                if (options[property] === null || options[property] === undefined) {
                    delete this[property];
                } else {
                    var proto = Object.getPrototypeOf(this);
                    var method = this.camelCase('get_' + property);
                    proto[method] = function() {
                        return this[property];
                    };
                }
            });
        }

    }

    camelCase(string) {
        string = string.toLowerCase();
        string = string.replace(/[^a-z0-9]/g, ' ');
        string = string.replace(/\s{2}/g, '');
        string = string.replace(/\w+/g, function(match) {
            return match.replace(/\b./, item => item.toUpperCase());
        });
        string = string.replace(/\s/g, '');
        string = string.replace(/\b./, item => item.toLowerCase());
        return string;
    }

    // getState() {
    //     let states = this.states() ? this.states() : [];
    //     let st = _.find(states, item => {
    //         let flag = true;
    //         _.forEach(item.params, (value, key) => {
    //             if (this[key] !== value) {
    //                 flag = false;
    //             }
    //         });
    //         return flag;
    //     });
    //     return _.isUndefined(st) ? "" : st.state;
    // }

    // isState(state) {
    //     let states = this.states();
    //     let st = _.filter(states, item => {
    //         let flag = true;
    //         _.forEach(item.params, (value, key) => {
    //             if (this[key] !== value) {
    //                 flag = false;
    //             }
    //         });
    //         return flag;
    //     });
    //     return !_.isUndefined(_.find(st, item => item.state === state));
    // }

    // getCreatedAt() {
    //     var m = moment.tz(this.timestamps.created_at.date, this.getTimezone());
    //     m.tz(AppTimeZone);
    //     return m;
    // }

    // getUpdatedAt() {
    //     var m = moment.tz(this.timestamps.updated_at.date, this.getTimezone());
    //     m.tz(AppTimeZone);
    //     return m;
    // }

    // getTimezoneType() {
    //     return this.timestamps.created_at.timezone_type;
    // }

    // getTimezone() {
    //     return this.timestamps.created_at.timezone === 'UTC' ? 'Etc/UTC' : this.timestamps.created_at.timezone;
    // }
}

module.exports = Model;