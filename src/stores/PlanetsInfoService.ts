class PlanetsInfoService {
  static #instance: PlanetsInfoService = new PlanetsInfoService()
  data: Map<string, any> = new Map()
  constructor() {}
  getInstance(): PlanetsInfoService {
    if (!PlanetsInfoService.#instance) {
      PlanetsInfoService.#instance = new PlanetsInfoService()
    }

    return PlanetsInfoService.#instance
  }
  register(name: string, data: any) {
    this.data.set(name, data)
  }
  get(name: string) {
    return this.data.get(name)
  }
  set(name: string, data: any) {
    this.data.set(name, data)
  }
}

export default new PlanetsInfoService()
