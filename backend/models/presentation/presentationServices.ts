import Presentation, { IPresentation } from './Presentation'

export const createPresentation = async (
    name: string,
    textContent: string
): Promise<IPresentation> => {
    const presentation = new Presentation({
        name,
        textContent,
    })

    return await presentation.save()
}

export const getAllPresentations = async (): Promise<IPresentation[]> => {
    return await Presentation.find()
}

export const getPresentationByName = async (
    name: string
): Promise<IPresentation | null> => {
    return await Presentation.findOne({ name: name })
}

export const deletePresentationByName = async (
    name: string
): Promise<IPresentation | null> => {
    return await Presentation.findOneAndDelete({ name: name })
}