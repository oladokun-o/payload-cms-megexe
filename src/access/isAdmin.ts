import { PayloadRequest } from 'payload';

export const isAdmin = async ({ req }: { req: PayloadRequest }): Promise<boolean> => {
  if (req.user?.role === 'admin') {
    return true;
  }
  return false;
};
