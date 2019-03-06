import { matchPath, generatePath } from 'react-router-dom'

export const getRouteMatch = (route: string, state: any) => {
    const match = matchPath(
        state.router.location.pathname, // like: /course/123
        { path: route }
    )
    return match as any
}
