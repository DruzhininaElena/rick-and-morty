import {baseApi} from '@/app/baseApi.ts';
import type {DomainLocationType, LocationType} from '@/features/planets/api/planetsApi.types.ts';
import {planetsArr} from '@/features/planets/ui/Planets/planetsData.ts';
import planet1 from '@/assets/images/planets/planet-1.png'

export const charactersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPlanets: builder.query<DomainLocationType[], void>({
            query: () => ({
                url: `/location/${planetsArr.map(i => i.id)}`,
            }),
            transformResponse: (planets: LocationType[]) => {
                return planets.map((pl, i) => ({...pl, imgUrl: planetsArr[i].url}))
            }
        }),
        getPlanetById: builder.query<DomainLocationType, string>({
            query: (id) => ({
                url: `/location/${id}`,
            }),
            transformResponse: (planet: LocationType) => {
                const findPlanetById = planetsArr.find(pl => pl.id === planet.id)
                if (!findPlanetById) {
                    return {...planet, imgUrl: planet1}
                }
                return {...planet, imgUrl: findPlanetById.url}
            }
        })
    })
})

export const {useGetPlanetsQuery, useGetPlanetByIdQuery} = charactersApi