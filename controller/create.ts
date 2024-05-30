import { Request, Response } from 'express';
import createUserData from '../service/create';

// Import any necessary models or services

export const createMongoDataController = async (req: Request, res: Response) => {
    try {
        // Extract the necessary data from the request body
        const { /* fields */ } = req.body;

        // Validate the data if needed

        // Create a new record using the data
        const newRecord = await createUserData(req.body);

        // Return the newly created record as the response
        res.status(201).json(newRecord);
    } catch (error) {
        // Handle any errors that occur during the create process
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};