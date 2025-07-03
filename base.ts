import { BaseForm, GenericPageContext } from "xdt-formext";

export abstract class FormBase<
    TFormContext extends GenericPageContext,
    TFormAttributes extends XdtXrm.EmptyFormAttributes,
    TFromControls extends XdtXrm.EmptyFormControls,
> extends BaseForm<TFormContext, TFormAttributes, TFromControls> {}
