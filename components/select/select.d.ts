import { EventEmitter, ElementRef, OnInit, AfterContentInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Http, Response } from '@angular/http';
import { SelectItem } from './select-item';
import { OptionsBehavior } from './select-interfaces';
import { SelectEmitterService } from './select-emitter.service';
export declare class SelectComponent implements OnInit, AfterContentInit {
    private sanitizer;
    private http;
    private emitter;
    allowClear: boolean;
    placeholder: string;
    noResultsText: string;
    idField: string;
    textField: string;
    multiple: boolean;
    fetchUrl: string;
    defaultFetchUrl: string;
    responseMapper: (response: Response) => Array<string | {
        id: any;
        text: any;
    }>;
    fetchOnInit: boolean;
    isLoading: boolean;
    loadingText: string;
    private _fetchTimeout;
    private _loadingTimeout;
    private _fetchTimeoutHandle;
    private _loadingTimeoutHandle;
    items: Array<any>;
    disabled: boolean;
    active: Array<any>;
    fetchTimeout: number;
    data: EventEmitter<any>;
    selected: EventEmitter<any>;
    removed: EventEmitter<any>;
    typed: EventEmitter<any>;
    fetching: EventEmitter<any>;
    fetched: EventEmitter<any>;
    fetchedError: EventEmitter<any>;
    options: Array<SelectItem>;
    itemObjects: Array<SelectItem>;
    activeOption: SelectItem;
    element: ElementRef;
    readonly inputPlaceholder: any;
    private inputMode;
    private optionsOpened;
    private behavior;
    private inputValue;
    private _items;
    private _disabled;
    private _active;
    private _isFetching;
    constructor(element: ElementRef, sanitizer: DomSanitizer, http: Http, emitter: SelectEmitterService);
    sanitize(html: string): string;
    inputEvent(e: any, isUpMode?: boolean): void;
    ngOnInit(): any;
    ngAfterContentInit(): any;
    remove(item: SelectItem): void;
    doEvent(type: string, value: any): void;
    clickedOutside(): void;
    readonly firstItemHasChildren: boolean;
    protected matchClick(e: any): void;
    protected mainClick(event: any): void;
    protected selectActive(value: SelectItem): void;
    protected isActive(value: SelectItem): boolean;
    protected getActiveIndex(value: SelectItem): number;
    private focusToInput(value?);
    private open();
    private hideOptions();
    private selectActiveMatch();
    private selectMatch(value, e?);
    private triggerFetch();
    private fetchItemsFromUrl();
}
export declare class Behavior {
    optionsMap: Map<string, number>;
    actor: SelectComponent;
    constructor(actor: SelectComponent);
    fillOptionsMap(): void;
    ensureHighlightVisible(optionsMap?: Map<string, number>): void;
    private getActiveIndex(optionsMap?);
}
export declare class GenericBehavior extends Behavior implements OptionsBehavior {
    constructor(actor: SelectComponent);
    first(): void;
    last(): void;
    prev(): void;
    next(): void;
    filter(query: RegExp): void;
}
export declare class ChildrenBehavior extends Behavior implements OptionsBehavior {
    constructor(actor: SelectComponent);
    first(): void;
    last(): void;
    prev(): void;
    next(): void;
    filter(query: RegExp): void;
}
