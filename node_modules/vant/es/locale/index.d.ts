declare type Message = Record<string, any>;
export declare const Locale: {
    messages(): Message;
    use(newLang: string, newMessages?: Message | undefined): void;
    add(newMessages?: Message): void;
};
export default Locale;
