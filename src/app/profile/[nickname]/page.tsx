interface Params {
    params: {nickname:string};
    searchParams:{lang:string}
}

export default function Profile({params, searchParams}: Params) {
    return (
        <h1>Profiles: {params.nickname} idioma={searchParams.lang}</h1>
    )
}