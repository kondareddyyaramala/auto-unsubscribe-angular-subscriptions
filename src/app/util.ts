export function AutoUnsubscribe(obs$ = []) {
    return function(constructor: any) {
        const orig = constructor.prototype.ngOnDestroy
        constructor.prototype.ngOnDestroy = function() {
            for(const ob$ of obs$) {
                this[ob$].unsubscribe()
            }
            orig.apply()
        }
    }
}