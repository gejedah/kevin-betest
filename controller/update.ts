import { Request, Response } from 'express';
import updateUserData from '../service/update';

// Import any necessary models or services

export const updateMongoDataController = async (req: Request, res: Response) => {
    try {
        const newRecord = await updateUserData(req.params.id, req.body);
        // Return the newly created record as the response
        res.status(200).json(newRecord);
    } catch (error) {
        // Handle any errors that occur during the create process
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};