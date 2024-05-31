import { Request, Response } from 'express';

export const getUserByIdNumberController = async (req: Request, res: Response) => {
    try {
        req.params.number
        res.status(200).json({ message: 'success' });
    } catch (error) {
        // Handle any errors that occur during the create process
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};