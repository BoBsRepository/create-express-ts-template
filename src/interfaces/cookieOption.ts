export interface CookieOptions {
  expires: Date;
  httpOnly: boolean;
  secure: boolean;
  sameSite: boolean | 'strict' | 'lax' | 'none';
}
