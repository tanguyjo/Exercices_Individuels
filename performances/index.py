import time

def now():
    temps_initial = time.perf_counter() * 1000  

    def add(a, b):
        return a + b

    def add_array(array, value):
        result = []
        for i in range(len(array)):
            result.append(add(array[i], value))
        print(result)
        return result

    def factoriel(n):
        if n <= 1:
            return 1
        return n * factoriel(n - 1)

    add_array([3, 4214124, 1122414, 10], 1901215)
    print(factoriel(5))

    temps_final = time.perf_counter() * 1000 
    temps_ecoule = temps_final - temps_initial

    print(f"Le temps initial est de {temps_initial:.3f} ms")
    print(f"Le temps Final est de {temps_final:.3f} ms")
    print(f"L'exécution a duré {temps_ecoule:.3f} ms")

now()
