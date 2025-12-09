import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AppProviders } from './providers/AppProviders'

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => {
    return {
        user: userEvent.setup(),
        ...render(ui, { wrapper: AppProviders, ...options }),
    }
}

export * from '@testing-library/react'
export { customRender as render }
