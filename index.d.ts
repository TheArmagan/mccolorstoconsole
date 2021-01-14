declare module "mccolorstoconsole" {
  export const colors: Object;
  export function minecraftToConsole(
    text: string,
    colorPrefixChar?: string,
    clearAtEnd?: boolean
  ): string;
}
