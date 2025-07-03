import { AccountForm } from "../../form/account";
import * as MockGen from "xdt-formext/mock";
import { ExtendedFormContext } from "xdt-formext";

describe("Account Form Tests", () => {
    let _context: FormExt.account.Main.Account &
        ExtendedFormContext<FormExt.account.Main.Account.FormAttributes, FormExt.account.Main.Account.FormControls>;
    let _form: AccountForm;

    beforeEach(async () => {
        const mock = MockGen.initializeForm("../../../typings/Xdt/Form/account/Main/Account.d.ts");

        _form = new AccountForm(mock.Page as any);
        await _form.onInitialLoad();
        _context = _form.context as any;
    });

    test("On load of form SHOULD set Description", () => {
        expect(_context.getValue("description")).toBe("Totally awesome example");
    });
});
