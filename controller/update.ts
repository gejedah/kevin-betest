import { Request, Response } from 'express';
import { updateUserData } from '../service/update';

export const updateMongoDataController = async (req: Request, res: Response) => {
    try {
        const updateRecord = await updateUserData(req.params.id, req.body);
        res.status(200).json(updateRecord);
    } catch (error) {
        // Handle any errors that occur during the create process
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};