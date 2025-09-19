
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const RouteError = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">
                        {error.status} {error.statusText}
                    </h1>
                    <p className="text-gray-600 mb-4">{error.data}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h1 className="text-2xl font-bold text-red-600 mb-4">Oops!</h1>
                <p className="text-gray-600 mb-4">
                    Sorry, an unexpected error has occurred.
                </p>
                <p className="text-sm text-gray-500">
                    {(error as Error)?.message || 'Unknown error'}
                </p>
            </div>
        </div>
    );
};

export default RouteError;