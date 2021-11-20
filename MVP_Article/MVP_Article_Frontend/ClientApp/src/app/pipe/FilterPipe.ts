import { Pipe, PipeTransform } from '@angular/core';
import { EntityBase } from '../model/EntityBase';

@Pipe({
    name: 'FilterPipe',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: EntityBase[]): any {
        if (!items) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => !item.Deleted);
    }
}
