import "nookies";

declare module "nookies" {
  function parseCookies<T>(
    ctx?:
      | Pick<next.NextPageContext, "req">
      | {
          req: next.NextApiRequest;
        }
      | {
          req: express.Request;
        }
      | null
      | undefined,
    options?: cookie.CookieParseOptions
  ): T;
}
