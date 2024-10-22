# Entanglement of Multi-Qubit Circuits, Teleportation and Superdense Coding

## Bell states
$$
|\Phi^+ \rangle = \frac{1}{\sqrt{2}} (|00\rangle + |11\rangle) \quad
|\Phi^- \rangle = \frac{1}{\sqrt{2}} (|00 \rangle - |11\rangle) \newline
|\Psi^+ \rangle = \frac{1}{\sqrt{2}} (|01 \rangle + | 10\rangle) \quad
|\Psi^- \rangle = \frac{1}{\sqrt{2}} (01 \rangle - |10\rangle)
$$

## Quantum teleportation 
Alice would like to send a qubit’s unknown state $|\psi\rangle = \alpha | 0 \rangle + \beta | 1\rangle$ to Bob

Alice does not know the state $|\psi \rangle$, She cannot describe to Bob. If she **Measure** the qubit, she will collapse it to $|0 \rangle$ or $1 \rangle$.\
Alice only have one qubit in the state $|\psi \rangle$, and from the **no-cloning theorem** , she cannot make extra copies.

**Quantum Solution** \
If Alice and Bob already share entanglement, they can use it to teleport the quantum state.
$$
\begin{align*}
|\psi \rangle |\Phi^+ \rangle &= \alpha |0 \rangle |\Phi^+ \rangle + \beta |1\rangle |\Phi^+ \rangle \\[5pt]
&= \alpha|0\rangle \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle) + \beta|1\rangle \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle) \\[5pt]
&= \frac{1}{\sqrt{2}}[\alpha(|000\rangle + |011\rangle) + \beta(|100\rangle + |111\rangle)]
\end{align*}
$$
The left two qubits belongs to Alice and the right qubit belongs to Bob.\
First, Alice applies a **CNOT** gate to her 2 qubits:
$$
\frac{1}{\sqrt{2}}[\alpha(|000\rangle + |011\rangle) + \beta(|110\rangle + |101\rangle)]
$$
Next, she applied a Hardmard gate to her **left** qubit, yielding
$$
\begin{align*}
& \frac{1}{\sqrt{2}}[\alpha(|+00\rangle + |+11\rangle) + \beta (|-10\rangle+ |-01\rangle)] \\[5pt]
&= \frac{1}{2}[\alpha(|0\rangle + |1\rangle)(|00\rangle + |11\rangle) + \beta (|0\rangle - |1\rangle)(|10\rangle + |01\rangle)] \\[5pt]
&= \frac{1}{2}[|00\rangle (\alpha|0\rangle + \beta | 1\rangle) + |01\rangle (\beta |0\rangle + \alpha |1\rangle) 
 |10\rangle(\alpha |0\rangle-\beta |1\rangle) + |11\rangle (-\beta|0\rangle + \alpha |1\rangle)]
\end{align*}
$$ 
Then Alice measures her two qubits. She gets 00, 01, 10, 11, each with probability 1/4. So after measurement, the possible states are
$$
|00\rangle (\alpha|0\rangle + \beta | 1\rangle), \newline
|01\rangle (\beta |0\rangle + \alpha |1\rangle), \newline
|10\rangle (\alpha |0\rangle-\beta |1\rangle), \newline
|11\rangle (-\beta|0\rangle + \alpha |1\rangle) \newline

$$
