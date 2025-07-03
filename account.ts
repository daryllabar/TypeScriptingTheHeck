import { FormBase } from "./base";

export class AccountForm extends FormBase<
    FormExt.account.Main.Account,
    FormExt.account.Main.Account.FormAttributes,
    FormExt.account.Main.Account.FormControls
> {
    static onLoad(executionContext: XdtXrm.OnLoadEventContext, formName?: string): void {
        FormBase.load(executionContext, AccountForm, formName);
    }

    async onInitialLoad(): Promise<void> {
        this.context.setValue("description", "Totally awesome example");
    }
}
