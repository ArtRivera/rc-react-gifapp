import "../setupTests";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el Hook useFetchGif", () => {
  test("should retornar el estado inicial", async () => {
    const { result,waitForNextUpdate } = renderHook(() => useFetchGifs("WandaVision"));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('should retornar [] de imagenes y loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("WandaVision"));
    await waitForNextUpdate()
    const { data, loading } = result.current;

    expect(data.length).toEqual(10);
    expect(loading).toBe(false);
  })
  

});
